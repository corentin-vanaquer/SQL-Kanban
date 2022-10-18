-- Revert okanban:1.create_table from pg

BEGIN;

DROP TABLE "card_has_label", "label", "card", "list";

COMMIT;
