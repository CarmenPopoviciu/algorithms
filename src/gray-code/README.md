# Gray Code

The gray code is a binary numeral system where two successive values differ in only one bit (binary digit)

### Problem

Given a non-negative integer n representing the total number of bits in the code, print the sequence 
of gray code. A gray code sequence must begin with 0.

For example, given n = 2, one possible gray code sequence is:

```
00 - 0
01 - 1
11 - 3
10 - 2
```

### Algorithm

> The binary-reflected Gray code list for n bits can be generated recursively from the list for n − 1 bits by 
> reflecting the list (i.e. listing the entries in reverse order), concatenating the original list with the reversed 
> list, prefixing the entries in the original list with a binary 0, and then > prefixing the entries in the reflected 
> list with a binary 1.

> --Wikipedia--

in other words

```
Gray(1) = 0, 1

Gray(n) = 0 · Gray(n−1), 1 · reflect(Gray(n−1)), where n > 1 and the comma appends the two lists
```

### References

[Gray Code - Wikipedia](https://en.wikipedia.org/wiki/Gray_code)

[The Greedy Gray Code Algorithm - Aaron Williams](http://www.math.mcgill.ca/haron/Papers/Conference/GGA.pdf)