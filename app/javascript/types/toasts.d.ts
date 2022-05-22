export interface IToastState {
  message: string;
  show: boolean;
  type: 'success' | 'error' | 'warning' | 'info';
  configs: {
    position:
      | 'top-center'
      | 'top-right'
      | 'top-left'
      | 'bottom-center'
      | 'bottom-right'
      | 'bottom-left';
    duration: number;
  };
}

export type TToastMessage = IToastState['message'];

export type TToastType = IToastState['type'];

export type TToastConfigs = IToastState['configs'];

export type TShowToast = (
  message: IToastState['message'],
  type?: IToastState['type'] = 'info',
  configs?:
    | Partial<{
        position:
          | 'top-center'
          | 'top-right'
          | 'top-left'
          | 'bottom-center'
          | 'bottom-right'
          | 'bottom-left';
        duration: number;
      }>
    | undefined,
) => void;
