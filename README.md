輝かしき学びのれきし

# Codespaces
- web上で動く開発環境
  - iPadから使えるのが偉い

# 知見

- 最初からある程度のパッケージが入っている
  - npmとかも使える、普通に
- ポートフォワーディングでlocalhostで建てたやつにもつながる
- iPadでターミナルを使うにはgpu accelerationをoffにする必要がある
  - Firefoxブラウザではコマンドパレットを開くキーボードショートカットが使えない
- nextが見つからない
  - 解決法↓
```bash
npm install
```
で`node_modules`とかの依存関係(dependencies)を入れる。`.gitignore`で入ってないので。codespacesを立て直す場合はこれをする
