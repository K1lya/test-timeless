import { useEffect, useState } from 'react';
import { IUser } from '../../types/User';

export const useFilterData = (data: IUser[] | undefined, filterString: string): IUser[] => {
  // consts
  const [result, setResult] = useState<IUser[]>(data || []);

  useEffect(() => {
    if (data) {
      setResult(data.filter(
        (user) => {
          const reg = new RegExp(`${filterString}`, 'gi');
          const res = user.name.last.match(reg);

          return res !== null;
        },
      ));
    }
  }, [data, filterString]);

  return result;
};
