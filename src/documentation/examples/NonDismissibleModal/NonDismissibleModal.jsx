import React, { useState, useEffect } from 'react';
import NonDismissibleModal from '@bufferapp/ui/NonDismissibleModal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';

/** NonDismissibleModal Example */
export default function ExampleSimpleModal() {
  const [modalOpen, openModal] = useState(false);

  useEffect(() => {
    const selfDestroy = setTimeout(() => {
      openModal(false);
    }, 5000);

    return () => {
      clearInterval(selfDestroy);
    }
  }, [modalOpen])


  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          openModal(true);
        }}
        label="Bring the modal!"
      />
      {modalOpen && (
        <NonDismissibleModal>
          <div key="modal1" style={{ width: '300px', padding: '30px' }}>
            <Text type="p">
              This Modal will self destroy in 
              <b>
                {` `}
                3 seconds
              </b>
            </Text>
          </div>
        </NonDismissibleModal>)}
    </div>
  );
}
