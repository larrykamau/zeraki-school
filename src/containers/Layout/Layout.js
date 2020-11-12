import React from 'react';
import useComponentSize from 'utils/useComponentSize';
import {
  LayoutWrapper,
  ContentWrapper,
  ContentInnerWrapper,
} from './Layout.style';
import { useDeviceType } from 'utils/useDeviceType';


const Layout = ({ children }) => {
  let [{ height }] = useComponentSize();
  let [{ width }] = useComponentSize();
  const { desktop } = useDeviceType();

  return (
    <>
      <LayoutWrapper
        style={{
          height: `calc(100vh - ${height}px)`,
        }}
      >
        {desktop ? (
          <>
            <ContentWrapper
              style={{
                width: `calc(100% - ${width}px)`,
              }}
            >
              <ContentInnerWrapper>{children}</ContentInnerWrapper>
            </ContentWrapper>
          </>
        ) : (
          <ContentWrapper
            style={{
              width: '100%',
            }}
          >
            <h3>
              width: {width} , height: {height}
            </h3>
            <ContentInnerWrapper>{children}</ContentInnerWrapper>
          </ContentWrapper>
        )}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
