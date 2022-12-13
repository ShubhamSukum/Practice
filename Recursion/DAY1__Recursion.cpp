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

// sumation with -

void sume(int n,int sum)
{
    if(n<1) 
    {
      cout<<sum<<endl;
      return;
    }
    sume(n-1,sum+n);
}

int main()
{
  int n;
  cin>>n;
  // nami(n,0);
  // sumy(n,0,0);  // Sumation of n numbers
  sume(n,0);
  return 0;
}
