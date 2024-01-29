import classNames from 'classnames';
import styles from './tracker-screen.module.scss';

export interface TrackerScreenProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TrackerScreen = ({ className }: TrackerScreenProps) => {
  return (

    <div
      style={{
        width: 600,
        height: 400,
        position: 'relative',
        background: 'rgba(12.75, 11.79, 11.79, 0.77)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
      }}
    >
      <div
        style={{
          padding: 16,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
          width: '100%',
          height: '100%',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            width: 559,
            color: '#3DBF00',
            fontSize: 24,
            fontFamily: 'Inria Sans',
            fontWeight: '400',
            letterSpacing: 1.2,
            wordWrap: 'break-word',
          }}
        >
          The current location of the International Space Station is:
        </div>
      </div>
      <div
        style={{
          height: '100%',
          color: '#F5F5F5',
          fontSize: 24,
          fontFamily: 'Inria Sans',
          fontWeight: '700',
          letterSpacing: 1.2,
          wordWrap: 'break-word',
          textAlign: 'start',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          justifyItems: 'center',
          justifyContent: 'center',
        }}
      >
        timestamp: 1690369674
        <br />
        latitude: 50.1369
        <br />
        longitude: 131.5931
      </div>
    </div>
  );
};
