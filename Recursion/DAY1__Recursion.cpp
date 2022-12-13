#include<bits/stdc++.h>
using namespace std;

// Recursion prac
void nami(int n,int cnt)
{
  if(n<=cnt) return;
  cnt++;  
  nami(n,cnt);
  cout<<cnt<<endl;
}

// Sum of N numbers
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

int main()
{
  int n;
  cin>>n;
  // nami(n,0);
  sumy(n,0,0);  // Sumation of n numbers
  return 0;
}