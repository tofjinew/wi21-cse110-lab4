![breakpoint list]()

![watch expressions]()

The bug was that the number inputs were both strings, so they were concatenated instead of added. I fixed it by casting both to numbers by subtracting 0 from each.

![fix]()

1. citylots.json
2. part2.js
3. 11.15 MB
4. 1839 ms
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0
6. FeatureCollection
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData()