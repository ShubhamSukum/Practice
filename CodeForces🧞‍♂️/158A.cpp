#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n,k,temp,cnt;
    cnt=0;
    vector<int> v;
    cin>>n>>k;

    for(int i=0;i<n;i++)
    {
        cin>>temp;
        v.push_back(temp);
    }
        
    for(int i=0;i<n;i++)
    {
        if(v[i]>0 && v[i]>=k)cnt++;
    }

    cout<<cnt;
    
    return 0;
}