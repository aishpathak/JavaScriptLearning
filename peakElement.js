function peakElement(arr, n)
    {
        let i=0;
        while(i<=n)
    {
            if(n==0){
                console.log(i);
                return i;
            }
            if(arr[i+1]!= null && arr[i-1] !=null && arr[i]>arr[i+1] && arr[i]>arr[i-1]){
                console.log(i);
                return i;
            }
            if(arr[i]>arr[i-1] && arr[i+1] == null)
            {
                console.log(i);
                return i;
            }
            if(arr[i]>arr[i+1] && arr[i-1] == null)
            {
                console.log(i);
                return i;
            }  
            i = i+1;    
    }
    }

peakElement([4,2,3],3);