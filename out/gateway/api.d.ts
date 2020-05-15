export declare type CreateFunctionInput = {
    __typename?: 'CreateFunctionInput';
    type: FunctionType;
    name: Scalars['String'];
    sourceCode: Scalars['String'];
    webhookUrl?: Maybe<Scalars['String']>;
    settings: Array<FunctionSettingInput>;
};
export declare type FunctionSettingInput = {
    __typename?: 'FunctionSettingInput';
    name: Scalars['String'];
    label: Scalars['String'];
    description: Scalars['String'];
    type: FunctionSettingType;
    required: Scalars['Boolean'];
    sensitive: Scalars['Boolean'];
};
export declare enum FunctionSettingType {
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Map = "MAP",
    String = "STRING"
}
export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    Json: any;
    PreciseDate: any;
    /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * BigInt can represent values between -(2^53) + 1 and 2^53 - 1.
   */
    BigInt: any;
    Email: any;
    Slug: any;
    WriteKey: any;
};
export declare enum FunctionType {
    Destination = "DESTINATION",
    Source = "SOURCE"
}
export declare type UpdateFunctionInput = {
    __typename?: 'UpdateFunctionInput';
    sourceCode?: Maybe<Scalars['String']>;
    webhookUrl?: Maybe<Scalars['String']>;
    settings?: Maybe<Array<FunctionSettingInput>>;
};
export declare function createFunction(jwt_token: string, args: {
    workspaceId: Scalars['String'];
    input: CreateFunctionInput;
}): Promise<{
    id: string;
}>;
export declare function updateFunction(jwt_token: string, args: {
    workspaceId: Scalars['String'];
    functionId: Scalars['String'];
    input: UpdateFunctionInput;
}): Promise<{
    id: string;
}>;
