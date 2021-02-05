import type { ReactElement } from 'react';
import React from 'react';
import styled from 'styled-components';

import type { CommonProps } from './Common';
import { sharedBehaviour } from './Common';

function Restart(props: CommonProps): ReactElement {
  return (
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 14.155 14.155" {...props}>
      <g>
        <path
          d="M12.083,1.887c-0.795-0.794-1.73-1.359-2.727-1.697v2.135c0.48,0.239,0.935,0.55,1.334,0.95
		c1.993,1.994,1.993,5.236,0,7.229c-1.993,1.99-5.233,1.99-7.229,0c-1.991-1.995-1.991-5.235,0-7.229
		C3.466,3.269,3.482,3.259,3.489,3.25h0.002l1.181,1.179L4.665,0.685L0.923,0.68l1.176,1.176C2.092,1.868,2.081,1.88,2.072,1.887
		c-2.763,2.762-2.763,7.243,0,10.005c2.767,2.765,7.245,2.765,10.011,0C14.844,9.13,14.847,4.649,12.083,1.887z"
        />
      </g>
    </svg>
  );
}

export default styled(Restart)`
  ${sharedBehaviour}
`;
