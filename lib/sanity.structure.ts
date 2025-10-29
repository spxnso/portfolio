import { StructureBuilder } from "sanity/structure";

export const sanityStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Page")
        .id("about")
        .child(S.document().schemaType("about").documentId("about")),

      S.divider(),

      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("category").title("Categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          !["post", "project", "author", "category", "about"].includes(
            item.getId()!,
          ),
      ),
    ]);
