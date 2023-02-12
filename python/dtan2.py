import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import datetime as dt

df = pd.read_csv('sample2.csv')

df1 = df[df["Group"]==1]
df1["Frequency"] = 1

df1 = df1.drop(df1.iloc[:,0:5],axis=1)
df1["date"] = pd.to_datetime(df1["date"])
#df1["date"].astype('<M8[ns]')
df1 = df1.groupby("date",as_index=False).sum()
df1.sort_values(by=['date'],inplace=True)
x = df1["date"]
df1["date"] = df1['date'].map(dt.datetime.toordinal)


f = np.polyfit(df1['date'], df1['Frequency'], deg=1)
df1["Trend"] = f[0]
df1["date"] = x
print(df1)