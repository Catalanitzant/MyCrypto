import React from 'react';
import { Button, Heading, Panel } from '@mycrypto/ui';

import Stepper from './Stepper';
import './ContentPanel.scss';

// Legacy
import backArrowIcon from 'common/assets/images/icn-back-arrow.svg';

interface Props {
  children: any;
  className: string;
  heading: string;
  stepper?: {
    current: number;
    total: number;
  };
  onBack?(): void;
}

export default function ContentPanel({
  heading,
  onBack,
  children,
  className = '',
  stepper,
  ...rest
}: Props) {
  return (
    <div className="ContentPanel">
      {(onBack || stepper) && (
        <div className="ContentPanel-top">
          {onBack && (
            <Button basic={true} className="ContentPanel-top-back" onClick={onBack}>
              <img src={backArrowIcon} alt="Back arrow" /> Back
            </Button>
          )}
          {stepper && <Stepper current={stepper.current} total={stepper.total} />}
        </div>
      )}
      <Panel className={className} {...rest}>
        <Heading className="ContentPanel-heading">{heading}</Heading>
        {children}
      </Panel>
    </div>
  );
}