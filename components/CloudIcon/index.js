import React from 'react';
import Svg, {
	G,
	Path,
} from 'react-native-svg';

const CloudIcon = () => (
	<Svg width="32" height="28" viewBox="0 0 32 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<G id="Camera" transform="translate(-290.000000, -573.000000)" fill="#FFFFFF">
				<G id="Group-5" transform="translate(278.000000, 559.000000)">
					<Path d="M35.4753775,19.9380706 C36.5830024,20.06114 37.6239491,20.368809 38.5982488,20.8610867 C39.5725485,21.3533645 40.423766,21.9840859 41.1519268,22.7532698 C41.8800876,23.5224538 42.454403,24.4044382 42.8748903,25.3992495 C43.2953775,26.3940607 43.505618,27.4555187 43.505618,28.5836552 C43.505618,29.650257 43.3312722,30.7168427 42.9825755,31.7834445 C42.6338788,32.8500463 42.126225,33.8089479 41.4595988,34.6601782 C40.7929727,35.5114085 39.97765,36.2139193 39.013606,36.7677317 C38.0495621,37.3215442 36.9522095,37.6189575 35.7215151,37.6599807 C35.4548647,37.6599807 35.2241129,37.5625522 35.029253,37.3676922 C34.834393,37.1728323 34.7369645,36.9420806 34.7369645,36.6754301 C34.7369645,36.4087797 34.834393,36.178028 35.029253,35.983168 C35.2241129,35.7883081 35.4548647,35.6908796 35.7215151,35.6908796 L35.9984199,35.6908796 C36.8393944,35.6908796 37.603439,35.4806391 38.2905767,35.0601519 C38.9777144,34.6396646 39.5674133,34.0858605 40.059691,33.3987228 C40.5519688,32.7115851 40.9314272,31.9475405 41.1980776,31.106566 C41.464728,30.2655915 41.5980513,29.4246297 41.5980513,28.5836552 C41.5980513,27.6606344 41.4134499,26.7940335 41.0442416,25.9838264 C40.6750333,25.1736193 40.1725073,24.4659806 39.5366485,23.8608892 C38.9007898,23.2557978 38.1726399,22.7737831 37.352177,22.4148306 C36.5317141,22.0558781 35.6599853,21.8764045 34.7369645,21.8764045 L34.0293188,21.8456373 L33.8139484,21.1687588 C33.3011591,19.527833 32.4755807,18.2510067 31.3371884,17.3382417 C30.1987961,16.4254768 28.6553234,15.9691011 26.706724,15.9691011 C25.4760297,15.9691011 24.3684214,16.1793416 23.3838659,16.5998288 C22.3993104,17.0203161 21.5532207,17.6048871 20.8455715,18.3535595 C20.1379222,19.1022319 19.5943737,19.9944719 19.2149096,21.0303064 C18.8354455,22.0661408 18.6457163,23.1788769 18.6457163,24.3685481 L18.6764835,24.3685481 L18.7380179,25.2915643 L17.845769,25.4454003 C16.7586556,25.6300044 15.8356487,26.2145755 15.0767205,27.199131 C14.3177923,28.1836865 13.9383339,29.2912948 13.9383339,30.5219891 C13.9383339,31.9167761 14.4049652,33.1269407 15.3382417,34.1525193 C16.2715183,35.1780979 17.3739988,35.6908796 18.6457163,35.6908796 L19.507198,35.6908796 C19.7943601,35.6908796 20.0302396,35.7883081 20.2148438,35.983168 C20.3994479,36.178028 20.4917486,36.4087797 20.4917486,36.6754301 C20.4917486,36.9420806 20.3994479,37.1728323 20.2148438,37.3676922 C20.0302396,37.5625522 19.7943601,37.6599807 19.507198,37.6599807 L18.6457163,37.6599807 C17.7432071,37.6599807 16.8919896,37.4702515 16.0920383,37.0907874 C15.2920869,36.7113233 14.5895761,36.1934139 13.9844847,35.5370435 C13.3793933,34.8806732 12.8973786,34.1217564 12.5384261,33.2602704 C12.1794736,32.3987843 12,31.486033 12,30.5219891 C12,28.942598 12.4409922,27.5170651 13.3229898,26.2453476 C14.2049874,24.9736301 15.333107,24.1224126 16.7073824,23.6916696 C16.7894287,22.3173942 17.0919698,21.040568 17.6150149,19.8611526 C18.13806,18.6817371 18.835443,17.6561739 19.7071849,16.7844321 C20.5789267,15.9126902 21.6044899,15.2306907 22.7839054,14.7384129 C23.9633208,14.2461352 25.2709139,14 26.706724,14 C27.8143489,14 28.8296566,14.138451 29.7526773,14.4153573 C30.6756981,14.6922635 31.5064043,15.0871053 32.2448209,15.5998947 C32.9832375,16.112684 33.6190868,16.7382776 34.1523876,17.4766942 C34.6856885,18.2151108 35.1266807,19.0355614 35.4753775,19.9380706 Z M31.8756145,35.7831812 L32.1217521,35.9985516 C32.2653331,36.1421326 32.3371225,36.2959671 32.3371225,36.4600597 C32.3371225,36.6241523 32.2653331,36.7779868 32.1217521,36.9215678 L28.4912219,40.8905372 L28.4912219,40.9213044 L28.2450843,41.1674421 C28.163038,41.2494884 28.0809929,41.3058943 27.9989466,41.3366617 C27.9169003,41.3674291 27.8245996,41.3828125 27.7220418,41.3828125 C27.6399955,41.3828125 27.5528226,41.3674291 27.4605205,41.3366617 C27.3682185,41.3058943 27.2913012,41.2494884 27.2297665,41.1674421 L26.9836289,40.9213044 L26.9836289,40.8905372 L23.4146331,36.9831022 C23.2710521,36.8395212 23.1992626,36.6651754 23.1992626,36.4600597 C23.1992626,36.254944 23.2710521,36.0805982 23.4146331,35.9370172 L23.6607707,35.7831812 C23.8043517,35.6396002 23.9735697,35.5780664 24.1684296,35.5985779 C24.3632895,35.6190895 24.5325075,35.7011346 24.6760885,35.8447156 L26.7682584,38.1830232 L26.7682584,28.2759831 C26.7682584,28.0093327 26.8605591,27.778581 27.0451633,27.583721 C27.2297674,27.3888611 27.465647,27.2914326 27.752809,27.2914326 C28.0194594,27.2914326 28.2502112,27.3888611 28.4450711,27.583721 C28.639931,27.778581 28.7373596,28.0093327 28.7373596,28.2759831 L28.7373596,38.1830232 L30.8910639,35.7831812 C31.0346449,35.6396002 31.2038628,35.5678107 31.3987228,35.5678107 C31.5935827,35.5678107 31.752545,35.6396002 31.8756145,35.7831812 Z" id="cloud-download---simple-line-icons" />
				</G>
			</G>
		</G>
	</Svg>
);

export default CloudIcon;
