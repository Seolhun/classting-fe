import { RouteProps } from 'react-router-dom';

export interface RouteModel extends RouteProps {
  path: string;

  /**
   * Navigation Key 고유값
   */
  key: string;

  /**
   * Navigation Label 처리
   */
  name?: string;

  /**
   * Children
   */
  children?: RouteModel[];

  /**
   * Authorization Token 필요 여부
   */
  isPrivate?: boolean;

  /**
   * Navigation 노출 여부
   */
  isNavigation?: boolean;

  /**
   * Navigation에 included를 check를 위한 값
   */
  uniquePath?: string;
}
