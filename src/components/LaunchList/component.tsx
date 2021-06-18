import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';

type Props = {
    data: LaunchListQuery;
}

export default function LaunchList ({data}: Props) {
    if (!data) {
        return (
            <>
            </>
        )
    }

    console.log(`Component: ${JSON.stringify(data)}`);

    return (
        <>
            We have data!
        </>
    )
}