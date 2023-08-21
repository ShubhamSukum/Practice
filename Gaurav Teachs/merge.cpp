#include<bits/stdc++.h>
using namespace std;

vector<int> mergee(vector<int>& v1,vector<int>& v2){
    int p1=0,p2=0;
    vector<int> ans;

    while(p1<v1.size() && p2<v2.size()){
        if(v1[p1]<=v2[p2]){
            ans.push_back(v1[p1]);
            p1++;   
        }
        else if(v1[p1]>=v2[p2]){
            ans.push_back(v2[p2]);
            p2++;
        }
    }

    while(p1<v1.size()){
        ans.push_back(v1[p1]);
        p1++;
    }

    while(p2<v2.size()){
        ans.push_back(v2[p2]);
        p2++;
    }

    // for(auto &x:ans)cout<<x<<" ";
    // cout<<"\n";

    return ans; 
}

vector<int> divide(vector<int>& v1){
    if(v1.size()==1){
        cout<<v1[0]<<"ok\n";
        return v1;
    }

    int l=0,h=v1.size();
    int mid=(l+h)>>1;

    vector<int> a(v1.begin(),v1.begin()+mid);
    vector<int> b(v1.begin()+mid,v1.end());
    
    // cout<<"a"<<endl;
    // for(auto &x:a)cout<<x<<" ";
    // cout<<endl;

    // cout<<"b"<<endl;
    // for(auto &x:b)cout<<x<<" ";
    // cout<<endl;

    vector<int> sortA={divide(a)};
    vector<int> sortB={divide(b)};

    // cout<<"SORT A"<<endl;
    // for(auto &x:sortA)cout<<x<<" ";
    // cout<<endl;

    // cout<<"SORT B"<<endl;
    // for(auto &x:sortB)cout<<x<<" ";
    // cout<<endl;

    return mergee(sortA,sortB);
}

int main(){
    vector<int> v1={1,6,7,2,9};

    vector<int> ans=divide(v1);

    for(auto &x:ans)cout<<x<<" ";
    cout<<endl;

    // vector<int> v2={4,2,5,1};
    // mergee(v1,v2);
    return 0;
}