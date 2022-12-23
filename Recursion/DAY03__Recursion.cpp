#include<bits/stdc++.h>
using namespace std;

// fibonacci series
int fibo(int n)
{
    if(n<=1)return n;

    return fibo(n-1)+fibo(n-2);
}

// printing subsequences

void sub(int i,int n,vector<int>& result,vector<int>& v1)
{
    if(i==n)
    {
        for(auto x:result) cout<<x<<" ";
        cout<<endl;
        return;     // ek return nahi lihila tr segmentation fault dett basla compiler(obivously XD).
    }
    
    // TAKE 
    result.push_back(v1[i]);
    sub(i+1,n,result,v1);
    result.pop_back();

    // NOT TAKE
    sub(i+1,n,result,v1);
}

int main()
{   
    int n;
    n=3;
    // cin>>n;

    // cout<<fibo(n);

    vector<int> v1({3,2,1});
    vector<int> result;
    sub(0,n,result,v1);

    return 0;
}
