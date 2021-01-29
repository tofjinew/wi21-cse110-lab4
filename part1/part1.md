1. At line 11, the size of `prices` will be logged because `i` is declared with `var`, meaning its scope is the entire function.
2. At line 12, the unrounded discounted price of the last item in `prices` will be logged because, again, `discountedPrice` is declared with `var`, so its scope is the entire function.
3. At line 13, the new discounted price rounded to the nearest cent of the last item in prices will be logged since it is declared with `var`, meaning its scope is the entire function.
4. The function will return [50,100,150]. `discounted` begins as an empty list, then the loop traverses `prices` to calculate the discounted price for each item (by multiplying by 0.5 then rounding) and adds it to `discounted`.
5. At line 11, there will be an error, because `i` is declared inside the `for` loop with `let`, which means that it is not accessible outside of that code block. 
6. At line 12, there will be an error, because, again, `discountedPrice` is out of the scope of line 12 since it is declared with `let`, which means is only accessible from within the `for` loop.
7. At line 13, the last `finalPrice` will be logged, because though it's declared with `let`, final price is still declared in the same scope as line 13, and it is merely modified in the loop.
8. Assuming the other code does not cause errors, the function will also return [50,100,150]. `discounted` begins as an empty list, then the loop traverse `prices` to calculate the discounted price for each item (by multiplying by 0.5 then rounding) and adds it to `discounted`.
9. At line 11, there will be an error as in question 5, because `i` is declared inside the loop with `let`, which means that it is not accessible outside of that code block.
10. At line 12, there will be an error as in question 6, because `discountedPrice` is declared with `const` inside the loop, meaning it is not in the same scope as line 12.
11. At line 13, 0 (the initial value of `finalPrice`) would be logged, if the reassignment at line 7 did not cause an error due to `finalPrice` being declared with `const`.
12. Assuming the other code does not cause errors, the function will return [] (the initial value of `discounted`) because `discounted` is declared with `const`.
13. A. student.name
    B. student['Grad Year'] 
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
14. A. 32 because the string invokes concatenation for the `+`.
    B. 1 because the string `'3'` is converted to a number when subtracting.
    C. 3 because `null` is converted to the value 0 and they are added in the absence of a string.
    D. 3null because, since `'3'` is a string, `null` is converted to a string and they are concatenated.
    E. 4 because `true` is converted to the value 1 and they are added in the absence of a string.
    F. 0 because `false` is converted to the value 0 and `null` is converted to 0. THey are added in the absence of a string.
    G. 3undefined because, since `"3"` is a string, `undefined` is converted to a string and they are concatenated.
    H. NaN because `undefined` is converted to the value NaN and adding the value 3 (which is converted because of subtraction) to NaN results in NaN.
15. A. true because `'2'` is converted to a number since they are different types.
    B. false because `'2'` is lexicographically greater than '`12'`.
    C. true because `'2'` is converted to a number since they are different types.
    D. false because they are different types.
    E. false because `true` is converted to the value 1 since they are different types.
    F. true because `Boolean(2)` has the value true.
16. `===` doesn't convert then compare, evaluating to false if the types are different, whereas `==` converts to numbers if they're different.
17. 'How are you?' gets printed, because the first statement evaluates to false (true is converted to 1 with the `==` operator), and the second evaluates to true (2 is converted to a boolean value true).
19. [6,8,10]. `modifyArray` for each index of `array`, it calls `doSomething` which calls the unnamed function on that number + 2, which multiplies it by two. So in summary, for each `array[i]`, `modifyArray` pushes `(array[i] + 2) * 2` to `newArr`.  
21. 1 4 3 2
