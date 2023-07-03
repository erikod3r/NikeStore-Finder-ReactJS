import React, { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

const NikeSnkrs = memo((props?: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="24"
      fill="none"
      viewBox="0 0 36 24"
      {...props}
    >
      <path
        fill="#000"
        d="M9.977.842C8.535 2.447 7.92 3.402 7.589 4.537c-.302 1.037-.142 1.893.46 2.487.478.473.986.65 1.863.65.714 0 1.325-.117 2.22-.422.49-.164 16.317-6.729 16.424-6.81a.02.02 0 00.007-.015.02.02 0 00-.007-.015c-.008-.009-3.48.89-7.717 2-4.233 1.106-7.864 2.048-8.066 2.09-.56.117-1.476.108-1.872-.017a1.727 1.727 0 01-1.1-1.032c-.087-.21-.1-.327-.1-.744.005-.615.117-1.028.495-1.802.142-.288.254-.538.245-.547-.012-.008-.22.21-.464.482zM3.456 11.803c-1.498.34-2.517 1.67-2.586 3.38-.035.819.125 1.43.524 2.05.212.313.882.984 1.334 1.328.787.598 1.003.887.96 1.286-.03.25-.16.426-.413.547-.616.305-1.497-.073-2.216-.951l-.16-.194v3.575l.289.09c.585.186.775.207 1.798.207.917 0 1.011-.008 1.312-.099a3.448 3.448 0 002.06-1.716c.078-.15.177-.37.22-.495l.082-.228v1.235l.004 1.238H9.59l.01-2.683.012-2.685 1.032 2.672 1.037 2.675 1.256.013 1.257.009V11.829h-2.926l-.009 2.435-.012 2.43-.689-2.43-.688-2.435H6.664v3.3c-.004 3.29-.004 3.303-.086 3.08-.206-.576-.62-1.102-1.268-1.61-.255-.197-.607-.477-.788-.619-.426-.336-.61-.602-.61-.886 0-.181.02-.236.154-.378.176-.199.37-.276.68-.271.34.008.851.279 1.23.653l.301.297v-3.213l-.275-.112c-.581-.228-.908-.293-1.618-.31-.464-.009-.748.004-.93.043h.002zm28.296.021c-.171.044-.481.16-.683.263-.624.31-1.23.973-1.506 1.643-.06.151-.112.28-.12.284-.01.009-.083-.125-.164-.301-.5-1.071-1.484-1.665-3.041-1.837-.318-.038-1.438-.047-3.782-.038l-3.33.013-.735 1.565-.736 1.562-.013-1.575-.008-1.574h-3.012v11.227h3.012V20.7l.004-2.353.908 2.353.912 2.357h5.704l.014-1.54c.004-.843.004-1.854 0-2.245-.005-.391.008-.68.025-.646.017.035.387 1.046.821 2.246l.788 2.18 1.81.023c.995.013 2.19.034 2.66.052.757.021.881.012 1.225-.069a3.384 3.384 0 002.246-1.777c.258-.517.353-.933.378-1.622.057-1.476-.378-2.276-1.815-3.355-1.006-.753-1.226-1.123-.925-1.55.301-.424 1.003-.399 1.622.061.258.19.744.689.744.761 0 .022.022.04.043.04.026 0 .043-.603.043-1.717v-1.713l-.25-.112c-.49-.219-.907-.296-1.75-.314-.65-.013-.826-.004-1.089.065zm-9.61 7.563l-.012 2.315-1.02-2.46a120.684 120.684 0 01-1.024-2.496c0-.017.46-.99 1.02-2.155l1.024-2.126.012 2.306c.005 1.27.005 3.347 0 4.616zm3.842-4.947c.417.236.636.71.585 1.282-.06.748-.534 1.265-1.157 1.269h-.25v-2.723l.297.022c.228.017.353.055.525.15zm4.25 3.339c.202.21.564.537.8.727l.637.511c.654.55.482 1.33-.327 1.476-.53.094-1.467-.422-1.897-1.045-.069-.1-.142-.177-.16-.177-.021 0-.042.421-.047.933l-.012.93-.659-1.364c-.365-.753-.654-1.368-.645-1.372.447-.224.572-.314.856-.59.258-.254.366-.404.512-.697l.185-.374.193.327c.108.185.354.495.564.715z"
      />
    </svg>
  );
});

export default NikeSnkrs;
