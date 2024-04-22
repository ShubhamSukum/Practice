#include<bits/stdc++.h>
using namespace std;

void binarySearch(vector<int>& v1,int ele){
    int low=0,high=v1.size()-1;

    while(low<=high){
        int mid=(low+high)>>1;

        if(v1[mid]==ele){
            cout<<"found"<<endl;
            return;
        }

        if(ele<v1[mid])high=mid-1;
        else low=mid+1;
    }

    cout<<"nahi mila"<<endl;
}

int main(){
    vector<int> v1={1,2,3,4,6,7};
    binarySearch(v1,8);
    return 0;
}