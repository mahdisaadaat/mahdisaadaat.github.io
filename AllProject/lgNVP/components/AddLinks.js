import data from "../db/data.json" assert { type: "json" };

export const Addlinks = () => {
  console.log(data.id);
  return `
    <div class="addLinks input-group rounded">
        <label class="addLinkLabel m-2">Add Links</label>
        <input class="addLinkInput m-2" type="text" />
        <button class="m-2">Add</button>
    </div>
    `;
};
