/* eslint-disable camelcase */

export interface RateModel {
  logistic_logo_url: string;
  max_duration: number;
  min_duration: number;
  shipment_price: number;
  duration: string;
  total_price: number;
  logistic_name: string;
  item_price: number;
  rate_name: string;
  platform_discount_percentage: number;
  platform_discount?: number;
  rate_type?: string;
  compulsory_insurance?: number;
  destination_sub_district?: number;
  insurance_percentage?: number;
  insurance_price?: number;
  min_item_value_for_insurance?: number;
  origin_sub_district?: number;
  rate_code?: string;
  rate_id?: number;
  total_price_without_insurance?: number;
  volume_weight?: number;
  weight?: number;
  _s?: string;
  rate_type_name: string;
}
