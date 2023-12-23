<fou-select
  name="families"
  class="mt-line"
  type="checkbox"
  className="mt-checkbox"
  has="5"
  ref="familySiblingModal"
  slot="content"
  :hide-drop="familiesHideDrop"
  :options="families.options"
  :closeOnSelect="false"
  :splitTagsLen="familiesLength"
  :value.sync="families.values"
  :class="$style.modalControls"
  :fou-select="families"
  :on-search="getFamiliesOptions"
  :on-change="updateFamiliesValues"
  :on-focus="focusFamiliesSearch"
  :on-delete="familiesDeleteLengthError"
  @click="hide"
  @click="addSibling(); hide()"
  isRelatedFamily
  multiple
  tags-outside
  :id="$vId(this, 'families')"
  :placeholder="$t('pages.submissions.components.descriptions.relatedFamilies.placeholder')"
  :trigger-title-open="$t('pages.submissions.components.descriptions.description.read_less')"
  :see="'na'"
  v-if="getSelectedFoundry && getSelectedFoundry.contractSummary === 'UFDA 2'"
  v-if="isSet()"
  v-if="errors.any(`fou-select_${$vId(this, 'tags')}`)"
  v-html="$sanitize($t('pages.submissions.components.descriptions.locales.description'))"
  :vee="{
    rules: 'required|max:25|script_tag_validate',
    as: $t('pages.submissions.components.descriptions.tags.name'),
    scope: `fou-select_${$vId(this, 'tags')}`
  }"
></fou-select>