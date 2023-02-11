import pandas as pd
import mysql.connector as sql
import matplotlib
from geopy.distance import geodesic

db_connection = sql.connect(host='localhost',database='Hack',user='pythonApp',password='VerySecure127!')
db_cursor = db_connection.cursor()
db_cursor.execute('SELECT * FROM Hack.reports')
table_rows = db_cursor.fetchall()
df = pd.DataFrame(table_rows)

rows_count = len(df.index)
print(df)
df["Group"] = ""

group = 1

for i in range(0,rows_count):
    if df["Group"][i]=="":
        df["Group"][i] = group

        location = (df[2].values[i],df[1].values[i])
    
        for x in range(i+1,rows_count):
            loccomp = (df[2].values[x],df[1].values[x])
            if(df[5].values[i]==df[5].values[x] and geodesic(location,loccomp) <=0.02):
                df["Group"][x]=group
            
        group=group+1
