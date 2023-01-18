# river-sizes

You are given a 2D array of potentially unequal width and height. 0 in the matrix represent land, 
1 in the matrix represent water. Write a function which returns the lengths of unique rivers.

0, 0, 0, 1
1, 1, 0, 0,
1, 0, 0, 1,
1, 0, 0, 1

returns [1, 4, 2]

0, 0, 0, 1, 1,
1, 1, 0, 0, 1,
0, 0, 0, 1, 1,
0, 0, 0, 1, 0

returns [6, 2]
