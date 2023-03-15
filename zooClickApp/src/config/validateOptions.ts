export const validateOptions = {
  email: {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    allow_ip_domain: false,
    domain_specific_validation: false,
    blacklisted_chars: '',
    host_blacklist: [],
  },
};
