import numpy as np
#import matplotlib.pyplot as plt
import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori

store_data = pd.read_csv('C:\\Users\\leleo\\Desktop\\PI mineração\\vendas.csv')

df = pd.DataFrame(store_data, columns=['descricao', 'id_compra'])

records = []     
buy = []

group_id = df.loc[0, 'id_compra']

for i in range(600):
    if df.loc[i, 'id_compra'] != group_id:
        group_id = df.loc[i, 'id_compra']
        records.append(buy)
        buy = []
        buy.append(df.loc[i, 'descricao'])
    else:
        buy.append(df.loc[i, 'descricao'])

te = TransactionEncoder()
te_ary = te.fit(records).transform(records)
df2 = pd.DataFrame(te_ary, columns=te.columns_)

result = apriori(df2, min_support=0.04, use_colnames=False)
#print(apriori(df2, min_support=0.04, use_colnames=False))
