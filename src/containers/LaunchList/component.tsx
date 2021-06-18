import * as React from 'react';
import LaunchList from '../../components/LaunchList/component';
import { useLaunchListQuery } from '../../generated/graphql';

export default function LaunchListContainer () {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  console.log(`Container: ${JSON.stringify(data)}`);

  return <LaunchList data={data} />;
};