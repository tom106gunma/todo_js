const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target)
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグ作成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {

    //　押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      //　押された削除ボタンの親タグ(div)を完了リストから削除
      document.getElementById("complete-list").removeChild(backButton.parentNode);
      // 完了リストに追加する要素
      const backTarget = backButton.parentNode
      const text = backTarget.firstElementChild.innerText;

      // div以下を初期化
      backTarget.textContent = null;

      // liタグ作成
      const li = document.createElement("li");
      li.innerText = text;

      createIncompleteList(text);
    })

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(div);

  })

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  })

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
}


document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
