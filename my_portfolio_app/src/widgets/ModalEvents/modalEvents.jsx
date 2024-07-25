/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Button, FormControl, Input } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import styles from './modalEvents.module.scss';

export const FormModalEvent = ({
  isShowForm,
  cancelFormHandler,
  changeEventHandler,
  eventFetchHandler,
  deleteEventHandler,
  method,
  setValue,
  value,
}) => {
  const v4 = uuidv4();
  return (
    isShowForm && (
      <Box key={v4}
        onClick={() => cancelFormHandler()}
        className={styles['modal-event-box']}
      >
        <FormControl
          key={`form-control-${v4}`}
          onClick={(e) => e.stopPropagation()}
          className={styles['modal-event-control-box']}
          >
          <FormControl>
            <Input
              className={styles['modal-event-input']}
              disableUnderline
              type='text'
              placeholder='Title'
              value={value?.title || ''}
              onChange={(e) => {
                changeEventHandler(e.target.value, 'title');
                setValue({ ...value, title: e.target.value });
              }}
              sx={{
                color: 'rgba(68, 70, 70, 0.885)',
                fontFamily: 'Cormorant',
                fontSize: '20px',
              }}
            />
          </FormControl>
        </FormControl>

        <FormControl
          key={v4}
          className={styles['modal-event-control-box']}
        >
          <Input
            className={styles['modal-event-input']}
            disableUnderline
            type='text'
            placeholder='Description'
            value={value?.description || ''}
            onChange={(e) => {
              changeEventHandler(e.target.value, 'description');
              setValue({ ...value, description: e.target.value });
            }}
            sx={{
              color: 'rgba(68, 70, 70, 0.885)',
              fontFamily: 'Cormorant',
              fontSize: '20px',
            }}
          />
        </FormControl>

        <Box
          key={`form-box-buttons-${v4}`}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            paddingBottom: '0px',
          }}
        >
          <Button
            key={`cancel-button-${v4}`}
            onClick={() => cancelFormHandler()}
            sx={{
              fontFamily: 'serif',
              fontSize: '15px',
              fontWeight: 'bolder',
              color: 'rgb(73, 79, 79)',
            }}
          >
            CANCEL
          </Button>
          <Button
            key={`method-button-${v4}`}
            onClick={() => eventFetchHandler()}
            sx={{
              fontFamily: 'serif',
              fontSize: '15px',
              fontWeight: 'bolder',
              color: 'rgb(73, 79, 79)',
            }}
          >
            {method}
          </Button>
          {method === 'Update' && (
            <Button
              key={`delete-button-${v4}`}
              onClick={() => deleteEventHandler()}
              sx={{
                fontFamily: 'Cormorant',
                fontSize: '15px',
                fontWeight: 'bolder',
                color: 'rgb(73, 79, 79)',
              }}
            >
              DELETE
            </Button>
          )}
        </Box>
      </Box>
    )
  );
};

export default FormModalEvent;
