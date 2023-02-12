import pandas as pd
import mysql.connector as sql
import matplotlib
from geopy.distance import geodesic
import datetime
import numpy as np

db_connection = sql.connect(host='localhost',database='Hack',user='pythonApp',password='VerySecure127!')
db_cursor = db_connection.cursor()
db_cursor.execute('SELECT * FROM Hack.reports')
table_rows = db_cursor.fetchall()
df = pd.DataFrame(table_rows)

rows_count = len(df.index)
df["groupid"] = ""
df1 = df[df[4]>=datetime.datetime.today() - datetime.timedelta(days=90)]

group = 1

for i in range(0,rows_count):
    if df["groupid"][i]=="":
        df["groupid"][i] = group

        location = (df[2].values[i],df[1].values[i])
    
        for x in range(i+1,rows_count):
            loccomp = (df[2].values[x],df[1].values[x])
            if(df[5].values[i]==df[5].values[x] and geodesic(location,loccomp) <=0.02):
                df["groupid"][x]=group
            
        group=group+1

df["frequency"]=1
df[4]=df[4].dt.date

groupeddf = df.groupby("groupid",as_index=False).agg({1:'mean',2:'mean',"frequency":'sum',5:'min'})
groupeddf = groupeddf.sort_values(by=["frequency"],ascending=False).reset_index()
print(groupeddf)

#groupeddf[9]=groupeddf.index()+1
#y=1
#for i in range(0,len(groupeddf.index)):
#    groupeddf[9][i]=y
#    y=y+1

groupeddf["trend"]=""

for i in range(1,max(groupeddf["groupid"])):
    df1 = df[df["groupid"]==i]

    df1 = df1.groupby(4,as_index=False).sum()
    print(df1)
    df1 = df1.sort_values(by=[4],ascending=True)
    df1[4] = df1[4].map(datetime.datetime.toordinal)

    f=np.polyfit(df1[4],df1["frequency"],deg=1)
    for x in range(0,len(groupeddf.index)):
        if(groupeddf["groupid"][x]==i):
            groupeddf["trend"]=f[0]


groupeddf['rank'] = groupeddf.index +1
groupeddf.rename(columns={5:'category',1:'longitude',2:'latitude'},inplace=True)
print(groupeddf)

db_cursor.execute('DELETE FROM Hack.analysis')
query = "INSERT INTO Hack.analysis (avglongitude,avglatitude,groupid,frequency,category,rank,trend) VALUES (%s,%s,%s,%s,%s,%s,%s)"

for i in range(1,len(groupeddf.index)):
    longitude = groupeddf["longitude"][i]
    latitude = groupeddf["latitude"][i]
    groupid = groupeddf["groupid"][i]
    frequency = groupeddf["frequency"][i]
    category = groupeddf["category"][i]
    rank = groupeddf["rank"][i]
    trend = groupeddf["trend"][i]

    db_cursor.execute(longitude,latitude,groupid,frequency,category,rank,trend)

#groupeddf.to_csv(r'/home/cwjg21/AleiosHack/python/analytics.txt',header=True,index=None,sep=',')