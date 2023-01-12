---
title: "プロダクト"
description: "飛鳥ソフトの会社情報を紹介します。商号、所在地、代表者、設立年月、資本金、連絡先など、当社の基本情報を掲載しています。"
date: 2023-01-12T22:49:41+09:00
draft: false
---


<div class="sproduct">
	<div class="sbg"><img src="/panda/logo/panda-224.png" style="width: 100%;"></img></div>
	<span id="forkongithub"><a href="https://github.com/pandafw/panda">Fork me on GitHub</a></span>
	<h1 id="panda-framework"><img src="/panda/logo/panda-48.png"></img> Panda Framework</h1>
	<h2 id="概要">概要</h2>
	<p>Panda Frameworkは企業むけ高品質なJava Webシステムを効率的に開発するためのフレームワークである。
		設計、開発、保守全ての開発フェースに対し、開発コストを削減、品質を向上するために設計されています。
		Spring / Struts2 / Hibernateなど普及しているJavaアプリケーションフレームワークと比較すれば、Pandaは小さく、使いやすく、開発しやすいです。
	</p>
	<h2 id="特徴とメリット">特徴とメリット</h2>
	<ol>
		<li>
			<p><b>ソースコードの自動生成</b><br />
				Panda
				Frameworkのコードジェネレータを使用し、Action/Dao/Bean/Viewソースコードを自動生成することにより、ほぼコーディングなしで、CRUD機能を実現し、開発コストが大幅削減。
			</p>
		</li>
		<li>
			<p><b>SQLを書く必要がありません</b><br />
				データ構造を定義してあるXMLで、テーブル作成などのDDL
				SQLとデータアクセスクラスDAOのJAVAソースコードが自動的に生成できます。データベースの構築が容易になり、ビジネスロジックのデータアクセス部分もDAOクラスを利用することによって簡単にプログラムできます。
				（※複雑のSQL除外）</p>
		</li>
		<li>
			<p><b>HTML画面⇒PDF帳票変換機能</b><br />
				商用のPDF帳票作成ツールで専門の帳票画面を作成する必要がありません。HTML⇒PDF変換機能で、HTML画面がそのままPDF帳票に変換できるため、開発コストが大幅削減。</p>
		</li>
		<li>
			<p><b>業務ロジックの作成が簡単</b><br />
				業務開発者は、Panda
				Frameworkの各種機能を利用することにより、業務処理の開発のみに集中することができます。「検索、一覧、表示、追加、更新、削除」のような基本機能をテンプレート化したクラスを利用することによって、業務ロジックを速やかに作成できます。
			</p>
		</li>
		<li>
			<p><b>生産性の向上と品質の均一</b><br />
				自動生成されたソースコードをベースにして開発を行うことで、生産性の向上と品質の均一化が図れます。</p>
		</li>
		<li>
			<p><b>導入しやすい</b><br />
				導入から開発への初期導入コストを低減する整備された豊富なドキュメント・サンプルを提供しています。</p>
		</li>
	</ol>
	<br>
	<h2 id="panda-frameworkの適用効果イメージ">Panda Frameworkの適用効果イメージ</h2>
	<p>Panda Frameworkを適用することにより、効果的な開発と運用保守が図れます。
		<img src="/panda/imgs/pandafw-apply-effect_ja.jpg" alt="適用効果" />
	</p>
	<br>
	<h2 id="panda-frameworkを適用するシステム構成図">Panda Frameworkを適用するシステム構成図</h2>
	<p><img src="/panda/imgs/pandafw-app-structure.jpg" alt="システム構成図" /></p>
	<br>
	<h2 id="demo_site">デモサイト</h2>
	<ul>
		<li><a target="_blank" href="https://panda-demo.azurewebsites.net">デモサイト on Azure</a></li>
		<li><a target="_blank" href="https://pandademo.herokuapp.com">デモサイト on Heroku</a></li>
		<li><a target="_blank" href="https://panda-demo.appspot.com">デモサイト on Google App Engine</a></li>
	</ul>
	<br>
	<h2 id="コードジェネレータの紹介">コードジェネレータの紹介</h2>
	<br>
	<h3 id="コードジェネレータの概要">コードジェネレータの概要</h3>
	<p>コードジェネレータは、画面およびデータの定義情報とテンプレートをもとに、データの照会・更新等を行うWebアプリケーションのソースコードを自動生成する。入力・表示項目や、型・桁数に関する定義については、お客様の指定に容易に合わせられるよう、デザインされている。</p>
	<p>業務固有の処理については、更新時の排他チェックや追加時の重複チェック等の枠組みのみを提供し、実装は開発者が行う。
		自動生成されたソースコードをベースとして開発を行うことで、生産性の向上と品質の均一化が図れる。</p>
	<p><img src="/panda/imgs/codegen-summary_ja.jpg" alt="コードジェネレータの概要" /></p>
	<h3 id="コードジェネレータの適用効果イメージ">コードジェネレータの適用効果イメージ</h3>
	<p><img src="/panda/imgs/codegen-effect_ja.jpg" alt="適用効果" /></p>
	<br>
	<h3 id="コードジェネレータ生成可能な機能">コードジェネレータ生成可能な機能</h3>
	<p>コードジェネレータは下記の機能を生成することが可能である。
		また、その機能をテンプレートとしてカスタマイズの機能を生成することも可能です。</p>
	<table class="table">
		<thead>
			<tr>
				<th>No.</th>
				<th>機能名称</th>
				<th>説明</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>検索機能</td>
				<td>データを検索する 検索。</td>
			</tr>
			<tr>
				<td>2</td>
				<td>一覧表示機能</td>
				<td>検索結果一覧を表示する機能。</td>
			</tr>
			<tr>
				<td>3</td>
				<td>一覧表示機能（印刷用）</td>
				<td>データの一覧を印刷用に表示する機能。</td>
			</tr>
			<tr>
				<td>4</td>
				<td>詳細表示機能</td>
				<td>データの詳細情報を表示する機能。</td>
			</tr>
			<tr>
				<td>5</td>
				<td>詳細表示機能（印刷用）</td>
				<td>データの詳細情報を印刷用に表示する機能。</td>
			</tr>
			<tr>
				<td>6</td>
				<td>新規追加機能</td>
				<td>データを新規追加する機能。</td>
			</tr>
			<tr>
				<td>7</td>
				<td>複写追加機能</td>
				<td>データを複写追加する機能。</td>
			</tr>
			<tr>
				<td>8</td>
				<td>データ変更機能</td>
				<td>データを変更する機能。</td>
			</tr>
			<tr>
				<td>9</td>
				<td>データ削除機能</td>
				<td>データを削除する機能。</td>
			</tr>
			<tr>
				<td>10</td>
				<td>データエクスポート機能</td>
				<td>データをCSV/XLSファイルにエクスポートする機能。</td>
			</tr>
			<tr>
				<td>11</td>
				<td>データインポート機能</td>
				<td>CSV/XLSファイルのデータをインポートする機能。</td>
			</tr>
			<tr>
				<td>12</td>
				<td>一括処理機能</td>
				<td>複数のデータを一括処理する機能。</td>
			</tr>
		</tbody>
	</table>
	<br>
	<h3 id="コードジェネレータ生成されたweb画面の遷移図">コードジェネレータ生成されたWEB画面の遷移図</h3>
	<p><img src="/panda/imgs/codegen-screen-transition_ja.jpg" alt="WEB画面遷移図" /></p>
	<br>
	<h3 id="コードジェネレータ生成されたweb画面のスクリーンショット">コードジェネレータ生成されたWEB画面のスクリーンショット</h3>
	<h4 id="検索一覧画面">検索一覧画面</h4>
	<p><img src="/panda/imgs/codegen-s-list.jpg" alt="検索一覧画面" /></p>
	<h4 id="詳細表示画面">詳細表示画面</h4>
	<p><img src="/panda/imgs/codegen-s-view.jpg" alt="詳細表示画面" /></p>
	<h4 id="新規追加入力画面">新規追加入力画面</h4>
	<p><img src="/panda/imgs/codegen-s-add.jpg" alt="新規追加入力画面" /></p>
	<h4 id="新規追加確認画面">新規追加確認画面</h4>
	<p><img src="/panda/imgs/codegen-s-add-confirm.jpg" alt="新規追加確認画面" /></p>
	<h4 id="新規追加完了画面">新規追加完了画面</h4>
	<p><img src="/panda/imgs/codegen-s-add-success.jpg" alt="新規追加完了画面" /></p>
	<h4 id="変更入力画面">変更入力画面</h4>
	<p><img src="/panda/imgs/codegen-s-edit.jpg" alt="変更入力画面" /></p>
	<h4 id="変更確認画面">変更確認画面</h4>
	<p><img src="/panda/imgs/codegen-s-edit-confirm.jpg" alt="変更確認画面" /></p>
	<h4 id="変更完了画面">変更完了画面</h4>
	<p><img src="/panda/imgs/codegen-s-edit-success.jpg" alt="変更完了画面" /></p>
	<h4 id="削除確認画面">削除確認画面</h4>
	<p><img src="/panda/imgs/codegen-s-delete-confirm.jpg" alt="削除確認画面" /></p>
	<h4 id="削除完了画面">削除完了画面</h4>
	<p><img src="/panda/imgs/codegen-s-delete-success.jpg" alt="削除完了画面" /></p>
	<h4 id="一括削除確認画面">一括削除確認画面</h4>
	<p><img src="/panda/imgs/codegen-s-bdelete-confirm.jpg" alt="一括削除確認画面" /></p>
	<h4 id="一括削除完了画面">一括削除完了画面</h4>
	<p><img src="/panda/imgs/codegen-s-bdelete-success.jpg" alt="一括削除完了画面" /></p>
</div>
