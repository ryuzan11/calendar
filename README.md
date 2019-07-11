# calenderApp(react使用)
## 制作背景
『使って楽しいカレンダー』  
ほとんどの人が使用するカレンダーで新しい試みができないかと考えた。  
業務に特化したカレンダー(スケジュール管理アプリ)は世に多く出ているので、  
プライベート向けのカレンダーアプリを開発する。  

- 収入  
広告収入で検討

- コンセプト  
予定の大小に関わらず、予定を達成した実感を仲間と一緒に分かち合えるカレンダーアプリ  
毎日の達成を積み重ねることで、仲間と一緒に成長していく

- ターゲット  
プライベートでカレンダーを使用するユーザーとその親しい関係のユーザー

- デザイン  
シンプルで使いやすい  
直感でとりあえずダウンロードしてみようかなと思うデザインを目指す

## 条件
reactを使用してカレンダーを作成

## 技術
- React
- Ruby
- Bootstrap
- MySQL

## 機能
- ユーザー
 - ログイン
 - サインアップ
 - 自己紹介
 - 編集
- グループ
 - メンバー 登録/追加/削除
 - コメント 登録
 - スケジュール管理
  - 予定 登録/編集/削除
  - リマインダー
  - 予定 達成・未達成

## 実装スケジュール
1. ユーザー
1. グループ
1. カレンダー  
----最低限達成する機能----
1. 予定登録
1. リマインダー機能
1. 達成・未達成表示
 1. 他ユーザーの達成・未達成
1. コメント

## DB設計
### userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|
|email|string|null: false|

#### Association
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :group_messages
- has_many :user_comments

### user_commentsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|send_user_id|integer|null: false, foreign_key: true|
|comment|string|null: false|

#### Association
- belongs_to :user

### group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :tasks

### group_messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|messages|string|null: false|

#### Association
- belongs_to :group
- belongs_to :user

## taskテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|task|string|null: false|
|task_start|time||
|task_end|time||
|date|datetime|null: false|

### Association
- belongs_to :group
- belongs_to :user