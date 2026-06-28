import { FC } from 'react';
import { classNames } from 'shared/lib';

import cls from './ProfilePhoto.module.scss';

interface ProfilePhotoProps {}

export const ProfilePhoto: FC<ProfilePhotoProps> = () => {
  const imgsrc =
    'https://yandex-images.clstorage.net/QFJX98399/dbc69catnvHs/VuIrwnm7OQHFzvlKtRXJUM-vNa1CKWOYieiwp-KR0_cDv2fqNo4emGPwmW-e2vzb12Uulw7FzNa2Aa-2jCt1uTKHT8edyzlQgX5dixXUyAQOewT5Y7kj7Rko1iEwxpRB4SxwXRFMmngSJJ1sOC6-jQFy2SKI0k-zskNu4cocQf4ls2lDrGh5oKFOS3j3xTuWPbxEWKHPEVjevXbhkGSk4UEsQ92wTmtJlfSuH0j6TgwQ8IvAStN_k4MwP2IJ3MI-FzD68D-LK1OQr6mLJ8fKF6xMVnnDHbBI_n8HQZOnBHNDLdJ_0M6aSEQ0_397e-wsk_C6UVjjzaFQ4n2AyV-AvjSjqeNfaInCYl47OpRXWoR97bSZIP2QiB5PxQBAVybggU_SbjKu6Lo21K5-qYotzGJA6sMpEX7TwaIuE3lcI74lgCuCTQmrcAF969rXljrkXb8GaJBP8ajvHEWhYnWlwXFv86_Tj0r5NoVeHEp4Ta4w4Djw65KNoeEzP1JJXNON5MG4Ic052aADH-j7JzVoJhwfJnlDHAF63P6m8pFEdhAxP5FP4a1ISyYUzP96iq1uM1PbkziyjHGhMy_gOPzQHocQeBE_CatR4e4pmoe2upUfvOQpcA3SqZ7etuJANNYjYf5AfENeOGrkNP1Ne-vufAIBOWLKkq6C8nB9omkuIL91MIigfbhoY_K8S4vWFxvGD6zECCM_sxiMH5byM3a0c5MOYK2TfRmrBbfPD3jLLh0B4RiReoAuAJPSHTBrPfIO9ZFakX77SwNyPhnrdyaIBGxOREvDvkPYTV21QnG11FKAXyKd8Z4YeTQVTuzpyp3OIpCoUgrjXfGDkTximvxSPgVDWsEvq0ugkD-L29V2m_Ut35WYoixQOv1vVNBgpkSiQSwi_YHu6LsmRT7e2_sc_wCi6eE7MH1TYTLfggv_ktxnIkvTfNnYImHtu8pHdtiGDT43y2Bec4ltrSVS8';
  return (
    <img
      src={imgsrc}
      className={classNames(cls.cornered)}
    />
  );
};
