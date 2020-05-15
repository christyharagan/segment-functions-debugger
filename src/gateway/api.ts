// import * as s from './schema'
import {request} from './request'

export type CreateFunctionInput = {
  __typename?: 'CreateFunctionInput',
 type: FunctionType,
 name: Scalars['String'],
 sourceCode: Scalars['String'],
 webhookUrl?: Maybe<Scalars['String']>,
 settings: Array<FunctionSettingInput>,
};
export type FunctionSettingInput = {
  __typename?: 'FunctionSettingInput',
 name: Scalars['String'],
 label: Scalars['String'],
 description: Scalars['String'],
 type: FunctionSettingType,
 required: Scalars['Boolean'],
 sensitive: Scalars['Boolean'],
};
export enum FunctionSettingType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Map = 'MAP',
  String = 'STRING'
}

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any,
  PreciseDate: any,
  /** 
 * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * BigInt can represent values between -(2^53) + 1 and 2^53 - 1. 
 */
  BigInt: any,
  Email: any,
  Slug: any,
  WriteKey: any,
};


export enum FunctionType {
  Destination = 'DESTINATION',
  Source = 'SOURCE'
}

export type UpdateFunctionInput = {
  __typename?: 'UpdateFunctionInput',
 sourceCode?: Maybe<Scalars['String']>,
 webhookUrl?: Maybe<Scalars['String']>,
 settings?: Maybe<Array<FunctionSettingInput>>,
};

export async function createFunction(jwt_token: string, args: {workspaceId: Scalars['String'],input: CreateFunctionInput,}): Promise<{id: string,}>{
  return await request(jwt_token, `mutation RunCreateFunction($workspaceId: String!, $input: CreateFunctionInput!) {
  createFunction(workspaceId: $workspaceId, input: $input) {
    id
    
    
  }
}
`, args, 'createFunction')
}
export async function updateFunction(jwt_token: string, args: {workspaceId: Scalars['String'],functionId: Scalars['String'],input: UpdateFunctionInput,}): Promise<{id: string,}>{
  return await request(jwt_token, `mutation RunUpdateFunction($workspaceId: String!, $functionId: String!, $input: UpdateFunctionInput!) {
  updateFunction(workspaceId: $workspaceId, functionId: $functionId, input: $input) {
    id
    
    
  }
}
`, args, 'updateFunction')
}
