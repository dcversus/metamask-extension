import React from 'react';
import PropTypes from 'prop-types';
import {
  AvatarNetwork,
  AvatarNetworkSize,
  Box,
  Text,
} from '../../../../../components/component-library';
import {
  Display,
  JustifyContent,
  BlockSize,
  AlignItems,
} from '../../../../../helpers/constants/design-system';
import {
  CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP,
  CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP_DARK_MODE,
  NETWORK_TO_NAME_MAP,
} from '../../../../../../shared/constants/network';
import { ThemeType } from '../../../../../../shared/constants/preferences';
import { useTheme } from '../../../../../hooks/useTheme';

export const getNetworkDetails = (network, theme) => {
  return {
    ...network,
    nickname: network.nickname ?? NETWORK_TO_NAME_MAP[network.chainId],
    iconUrl:
      theme === ThemeType.dark
        ? network.iconUrl ??
          CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP_DARK_MODE[network.chainId]
        : network.iconUrl ?? CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[network.chainId],
  };
};

export default function ConfirmationNetworkSwitch({ toNetwork, fromNetwork }) {
  const settingTheme = useTheme();

  const fromNetworkDetails = getNetworkDetails(fromNetwork, settingTheme);
  const toNetworkDetails = getNetworkDetails(toNetwork, settingTheme);

  return (
    <Box
      className="confirmation-network-switch"
      display={Display.Flex}
      height={BlockSize.Full}
      justifyContent={JustifyContent.center}
      marginTop={8}
    >
      <Box
        className="confirmation-network-switch__icon"
        display={Display.Block}
      >
        <AvatarNetwork
          src={fromNetworkDetails.iconUrl}
          name={fromNetworkDetails.nickname}
          size={AvatarNetworkSize.Xl}
          marginBottom={2}
        />
        <Text
          display={Display.Flex}
          justifyContent={JustifyContent.center}
          data-testid="network-switch-from-network"
        >
          {fromNetworkDetails.nickname}
        </Text>
      </Box>
      <Box
        className="confirmation-network-switch__center-icon"
        display={Display.Flex}
        alignItems={AlignItems.center}
        justifyContent={JustifyContent.center}
      >
        <i className="fa fa-angle-right fa-lg confirmation-network-switch__check" />
        <div className="confirmation-network-switch__dashed-line" />
      </Box>
      <Box
        className="confirmation-network-switch__icon"
        display={Display.Block}
      >
        <AvatarNetwork
          src={toNetworkDetails.iconUrl}
          name={toNetworkDetails.nickname}
          size={AvatarNetworkSize.Xl}
          marginBottom={2}
        />
        <Text
          display={Display.Flex}
          justifyContent={JustifyContent.center}
          data-testid="network-switch-to-network"
        >
          {toNetworkDetails.nickname}
        </Text>
      </Box>
    </Box>
  );
}

ConfirmationNetworkSwitch.propTypes = {
  toNetwork: PropTypes.shape({
    chainId: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    type: PropTypes.string,
  }),
  fromNetwork: PropTypes.shape({
    chainId: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    type: PropTypes.string,
  }),
};
