#include<bits/stdc++.h>
using namespace std;

// 1 Recursion prac
void nami(int n,int cnt)
{
  if(n<=cnt) return;
  cnt++;  
  nami(n,cnt);
  cout<<cnt<<endl;
}

// 2 Sum of N numbers
void sumy(int n,int sum,int cnt)
{
  if(cnt==n)
  {
    cout<<sum<<endl;
    return;
  }
  cnt++;
  sum+=cnt;
  sumy(n,sum,cnt);
}

// 3 sumation with -

void sume(int n,int sum)
{
    if(n<1) 
    {
      cout<<sum<<endl;
      return;
    }
    sume(n-1,sum+n);
}

// 4 return function

int retfun(int n)
{
  if(n==0) return 0;
  return n + retfun(n-1); 
}

// 5 factorial

// int fact(int n,int cnt,int facto)
// {  // MESSED UP
//   if(n==cnt) return facto;
  
//   facto=fact(n+1,cnt+1,facto)*fact(n+1,cnt+1,facto);
// }

/*
// function to find factorial of given number
unsigned int factorial(unsigned int n)
{
     if(n == 0)
          return 1;
    int i = n, fact = 1;
    while (n / i != n) {
        fact = fact * i;
        i--;
    }
    return fact;
}
 
*/

// 5 Factorial
int fact2(int n)
{
  if(n==0) return 1;
  return n * fact2(n-1); 
}

int main()
{
  int n;
  cin>>n;
  // nami(n,0);
  // sumy(n,0,0);  // Sumation of n numbers
  // sume(n,0);

  // cout<<retfun(n);  // write in cout statement as value which comes here wont be printed if we dont give cout to it.

  cout<<fact2(n)<<endl;
  return 0;
}