import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SORT_OPTIONS, SortOrder } from "../utils/filters";
import { colors, radius } from "../theme";

interface Props {
  value: SortOrder;
  onChange: (v: SortOrder) => void;
}

// 2 nút sắp xếp theo giá (bấm lần nữa để bỏ chọn)
export function SortButtons({ value, onChange }: Props) {
  return (
    <View style={styles.row}>
      {SORT_OPTIONS.map((o) => {
        const active = value === o.key;
        return (
          <Pressable key={o.key} style={[styles.btn, active && styles.btnActive]} onPress={() => onChange(active ? null : o.key)}>
            <Text style={[styles.text, active && styles.textActive]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8, paddingHorizontal: 12, paddingBottom: 8 },
  btn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.indigo },
  btnActive: { backgroundColor: colors.indigo },
  text: { color: colors.indigo, fontSize: 12, fontWeight: "600" },
  textActive: { color: "#fff", fontWeight: "800" },
});
