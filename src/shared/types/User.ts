import { RowFilterEnum } from '../ui/SelectRows/components/SelectFilter/SelectRows';

export interface IUser {
  'gender': string;
  'name': {
    'first': string;
    'last': string;
  };
  'location': {
    'city': string;
    };
  'email': string;
  'login': {
    'uuid': string;
  },
  'dob': {
    'date': string;
  },
  'phone': string;
  'picture': {
    'large': string;
    'medium': string;
    'thumbnail': string;
  },
  'nat': string;
}

export enum NationalityEnum {
  US = 'us',
  UA = 'ua',
  TR = 'tr',
  RS = 'rs',
  NZ = 'nz',
  NO = 'no',
  NL = 'nl',
  MX = 'mx',
  IR = 'ir',
  IN = 'in',
  IE = 'ie',
  GB = 'gb',
  FR = 'fr',
  FI = 'fi',
  ES = 'es',
  DK = 'dk',
  DE = 'de',
  CH = 'ch',
  CA = 'ca',
  BR = 'br',
  AU = 'au',
}

export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female'
}

export interface GetAllArgs {
  page?: number;
  genderFilter?: GenderEnum | null;
  nationalityFilter?: NationalityEnum | null;
  rowFilter: RowFilterEnum
}
