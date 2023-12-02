//Write a function that checks if two strings are anagrams 
//of each other (contain the same characters, but not necessarily in the same order).

function areAnagrams(str1, str2) {
    const sortedStr1 = str1.replace(/[^a-z0-9]/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/[^a-z0-9]/g, '').toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  
  console.log(areAnagrams("listen", "silent")); // Output: true
  