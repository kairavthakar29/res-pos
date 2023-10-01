import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetPosts = (slug , props) => {
  const { data,error,isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}${slug}`, fetcher , {initialData: props, revalidateOnMount: true });
  return {
    data,
    isLoading,
    isError: error
  }
};

export const useCombineData = (slug) => {
  const { data,error,isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}${slug}`, fetcher , {revalidateOnMount: true,refreshInterval:5000,revalidateIfStale:true,
    revalidateOnFocus:true,revalidateOnReconnect:true});
  return {
    data,
    isLoading,
    isError: error
  }
};

export const useProductData = (slug) => {
  const { data,error,isLoading} = useSWR(`${process.env.NEXT_PUBLIC_POS_BASE_API_URL}${slug}`, fetcher , {revalidateOnMount: true,refreshInterval:5000,revalidateIfStale:true,
    revalidateOnFocus:true,revalidateOnReconnect:true});
  return {
    data,
    isLoading,
    isError: error
  }
};

export const useFooterData = (slug) => {
  const { data,error,isLoading} = useSWR(`${process.env.NEXT_PUBLIC_ACF_OPTION_API_URL}${slug}`, fetcher , {revalidateOnMount: true,refreshInterval:5000,revalidateIfStale:true,
    revalidateOnFocus:true,revalidateOnReconnect:true});
  return {
    data,
    isLoading,
    isError: error
  }
};
