import { Button, Layout, Modal } from 'antd';
import React, { PureComponent } from 'react';
import styles from './Theme.css';

const { Header, Footer, Content } = Layout;

export default class Theme extends PureComponent {
  handleClickTheme = () => {};
  render() {
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Content className={styles.content}>
            <Button type="primary" onClick={this.handleClickTheme}>
              切换主题
            </Button>
          </Content>
          <Footer className={styles.footer} />
        </Layout>
      </div>
    );
  }
}
