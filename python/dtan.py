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
df[7] = ""
df1 = df[df[4]>=datetime.datetime.today() - datetime.timedelta(days=90)]

group = 1

for i in range(0,rows_count):
    if df[7][i]=="":
        df[7][i] = group

        location = (df[2].values[i],df[1].values[i])
    
        for x in range(i+1,rows_count):
            loccomp = (df[2].values[x],df[1].values[x])
            if(df[5].values[i]==df[5].values[x] and geodesic(location,loccomp) <=0.02):
                df[7][x]=group
            
        group=group+1

df[8]=1

groupeddf = df.groupby(7,as_index=False).agg({1:'mean',2:'mean',8:'sum',5:'min'})
groupeddf = groupeddf.sort_values(by=[8],ascending=False)
print(groupeddf)
groupeddf[9]=[1,len(groupeddf.index)]

groupeddf[10] = ""

for i in range(1,max(groupeddf[7])):
    df1 = df[df[7]==i]
    df1 = df1.drop(df1.iloc[:,[0,1,2,3,5,6]],axis=1)
    print(df1)
    df1 = df1.sort_values(by=[4],inplace=True)
    x = df1[4]
    df1[4] = df1[4].map(df.datetime.toordinal)

    f = np.polyfit(df1[4], df1[8], deg=1)
    fin = f[0]
    for x in range(1,len(groupeddf.index)):
        if(df[7][x]==i):
            groupeddf[10][x]= fin

groupeddf.to_csv(r'/home/cwjg21/AleiosHack/python/analytics.txt',header=True,index=None,sep=',')