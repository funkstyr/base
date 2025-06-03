export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      account: {
        Row: {
          access_token: string | null;
          access_token_expires_at: string | null;
          account_id: string;
          created_at: string;
          id: string;
          id_token: string | null;
          password: string | null;
          provider_id: string;
          refresh_token: string | null;
          refresh_token_expires_at: string | null;
          scope: string | null;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          access_token?: string | null;
          access_token_expires_at?: string | null;
          account_id: string;
          created_at: string;
          id: string;
          id_token?: string | null;
          password?: string | null;
          provider_id: string;
          refresh_token?: string | null;
          refresh_token_expires_at?: string | null;
          scope?: string | null;
          updated_at: string;
          user_id: string;
        };
        Update: {
          access_token?: string | null;
          access_token_expires_at?: string | null;
          account_id?: string;
          created_at?: string;
          id?: string;
          id_token?: string | null;
          password?: string | null;
          provider_id?: string;
          refresh_token?: string | null;
          refresh_token_expires_at?: string | null;
          scope?: string | null;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "account_user_id_user_id_fk";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      invitation: {
        Row: {
          created_at: string;
          email: string;
          expires_at: string;
          id: string;
          inviter_id: string;
          organization_id: string;
          role: string;
          status: string;
          team_id: string | null;
        };
        Insert: {
          created_at: string;
          email: string;
          expires_at: string;
          id: string;
          inviter_id: string;
          organization_id: string;
          role?: string;
          status?: string;
          team_id?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string;
          expires_at?: string;
          id?: string;
          inviter_id?: string;
          organization_id?: string;
          role?: string;
          status?: string;
          team_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "invitation_inviter_id_user_id_fk";
            columns: ["inviter_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "invitation_organization_id_organization_id_fk";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          },
        ];
      };
      member: {
        Row: {
          created_at: string;
          id: string;
          organization_id: string;
          role: string;
          team_id: string | null;
          user_id: string;
        };
        Insert: {
          created_at: string;
          id: string;
          organization_id: string;
          role?: string;
          team_id?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          organization_id?: string;
          role?: string;
          team_id?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "member_organization_id_organization_id_fk";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "member_user_id_user_id_fk";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      organization: {
        Row: {
          created_at: string;
          id: string;
          logo: string | null;
          metadata: string | null;
          name: string;
          slug: string | null;
          updated_at: string;
        };
        Insert: {
          created_at: string;
          id: string;
          logo?: string | null;
          metadata?: string | null;
          name: string;
          slug?: string | null;
          updated_at: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          logo?: string | null;
          metadata?: string | null;
          name?: string;
          slug?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      session: {
        Row: {
          active_organization_id: string | null;
          created_at: string;
          expires_at: string;
          id: string;
          impersonated_by: string | null;
          ip_address: string | null;
          token: string;
          updated_at: string;
          user_agent: string | null;
          user_id: string;
        };
        Insert: {
          active_organization_id?: string | null;
          created_at: string;
          expires_at: string;
          id: string;
          impersonated_by?: string | null;
          ip_address?: string | null;
          token: string;
          updated_at: string;
          user_agent?: string | null;
          user_id: string;
        };
        Update: {
          active_organization_id?: string | null;
          created_at?: string;
          expires_at?: string;
          id?: string;
          impersonated_by?: string | null;
          ip_address?: string | null;
          token?: string;
          updated_at?: string;
          user_agent?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "session_user_id_user_id_fk";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      team: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          organization_id: string;
          updated_at: string;
        };
        Insert: {
          created_at: string;
          id: string;
          name: string;
          organization_id: string;
          updated_at: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          organization_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "team_organization_id_organization_id_fk";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          },
        ];
      };
      todo: {
        Row: {
          completed: boolean;
          id: number;
          text: string;
        };
        Insert: {
          completed?: boolean;
          id?: number;
          text: string;
        };
        Update: {
          completed?: boolean;
          id?: number;
          text?: string;
        };
        Relationships: [];
      };
      user: {
        Row: {
          ban_expires: string | null;
          ban_reason: string | null;
          banned: boolean;
          created_at: string;
          display_username: string | null;
          email: string;
          email_verified: boolean;
          id: string;
          image: string | null;
          name: string;
          role: string;
          updated_at: string;
          username: string;
        };
        Insert: {
          ban_expires?: string | null;
          ban_reason?: string | null;
          banned?: boolean;
          created_at: string;
          display_username?: string | null;
          email: string;
          email_verified: boolean;
          id: string;
          image?: string | null;
          name: string;
          role?: string;
          updated_at: string;
          username: string;
        };
        Update: {
          ban_expires?: string | null;
          ban_reason?: string | null;
          banned?: boolean;
          created_at?: string;
          display_username?: string | null;
          email?: string;
          email_verified?: boolean;
          id?: string;
          image?: string | null;
          name?: string;
          role?: string;
          updated_at?: string;
          username?: string;
        };
        Relationships: [];
      };
      verification: {
        Row: {
          created_at: string;
          expires_at: string;
          id: string;
          identifier: string;
          updated_at: string;
          value: string;
        };
        Insert: {
          created_at: string;
          expires_at: string;
          id: string;
          identifier: string;
          updated_at: string;
          value: string;
        };
        Update: {
          created_at?: string;
          expires_at?: string;
          id?: string;
          identifier?: string;
          updated_at?: string;
          value?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
