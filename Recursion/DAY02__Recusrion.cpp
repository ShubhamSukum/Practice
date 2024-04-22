#include<bits/stdc++.h>
using namespace std;

// 1 IMPLEMENTED no ym nwo
vector<int> rev(vector<int>& v1,int i,int j)
{
    if(i>=j) return v1;

    swap(v1[i],v1[j]);
    rev(v1,i+1,j-1);
    return v1;
}

// 2 striver logic => No need to j. instead of j take "j=n-i-1"
void strL(int i,int size,vector<int>& v1)
{
    if(i>=size/2)return;
    swap(v1[i],v1[size-i-1]);
    strL(i+1,size,v1);
}

// Check if it is a Palindrome or not
bool paluXD(int i,int n,string s1)
{
    if(i>=n/2)return true;
    if(s1[i]!=s1[n-i-1]) return false;
    return paluXD(i+1,n,s1);
}

int main()
{   
    string s1;
    cout<<"Enter a String =>\n";
    cin>>s1;

    int n=s1.size();
    cout<<paluXD(0,n,s1);

    // vector<int> v1;
    /*
    int temp;
    cout<<"Enter the Elements of array\n*Press -1 at end to identify the array is over*=>\n";

    while(true)
    {
        cin>>temp;
        if(temp==-1) break;
        v1.push_back(temp);
    }
    */

    // recursion using two pointers
    // rev(v1,0,v1.size()-1);

    // strL(0,v1.size(),v1);
    // for(auto x:v1) cout<<x<<endl;

    // cout<<"\n\nMy Logic\n";\
    // rev(v1,0,v1.size()-1);
    // for(auto x:v1) cout<<x<<endl;

    return 0;
}
