import axios, { AxiosResponse } from 'axios';
import { IApiResponse } from '../types/userServiceTypes';
import { GetAllArgs, IUser } from '../../types/User';

export const userService = {
  baseUrl: 'https://randomuser.me/api/?',
  seed: '&seed=testSeed',
  categoryFilter: 'inc=gender,name,nat,location,email,login,dob,phone,picture',

  checkApi(): Promise<AxiosResponse<IApiResponse<IUser>>> {
    return axios(this.baseUrl + this.seed);
  },
  getAll(args?: GetAllArgs): Promise<AxiosResponse<IApiResponse<IUser>>> {
    const pageFilter = `&page=${args?.page}`;
    const nationFilter = `&nat=${args?.nationalityFilter}`;
    const genderFilter = `&gender=${args?.genderFilter}`;
    const rowFilter = `&results=${args?.rowFilter}`;

    let axiosData: string = this.baseUrl
      + this.categoryFilter;

    if (!args?.genderFilter) {
      axiosData = axiosData.concat(this.seed);
    }
    if (args?.page) {
      axiosData = axiosData.concat(pageFilter);
    }
    if (args?.genderFilter) {
      axiosData = axiosData.concat(genderFilter);
    }
    if (args?.nationalityFilter) {
      axiosData = axiosData.concat(nationFilter);
    }
    if (args?.rowFilter) {
      axiosData = axiosData.concat(rowFilter);
    }

    return axios(axiosData);
  },
};
