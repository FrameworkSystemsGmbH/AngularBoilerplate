import { MsgBoxButtons } from '@app/components/msgbox/msgbox-buttons';
import { MsgBoxIcon } from '@app/components/msgbox/msgbox-icon';

export interface IMsgBoxData {
  title: string;
  message: string;
  icon: MsgBoxIcon;
  buttons: MsgBoxButtons;
}
