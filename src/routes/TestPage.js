import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Link} from 'dva/router'
function TestPage() {
  return (
    <div className={styles.normal}>
      <Link to={"/test1"}>go to test 1</Link>
    </div>
  );
}

export default connect()(TestPage);
