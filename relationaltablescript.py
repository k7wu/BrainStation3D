def reltable(df):
    related_talks = []
    for i in df['related_talks']:
        related_talks.append(eval(i))
    index=[]
    related_talks_dict = []
    for i in related_talks:
        for j in i:
            index.append(related_talks.index(i))
            related_talks_dict.append(j)
    rel_talk = pd.DataFrame(data = related_talks_dict)
    rel_talk_table = rel_talk.assign(index=index)
    print(f'data is in dataframe "rel_talk_table"')
